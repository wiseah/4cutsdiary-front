import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, BarcodeFormat, DecodeHintType } from '@zxing/library';

const Reader = () => {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const Camera = useRef<HTMLVideoElement>(null);
  const hints = new Map();
  const formats = [
    BarcodeFormat.QR_CODE, 
    BarcodeFormat.DATA_MATRIX, 
    BarcodeFormat.CODE_128, 
    BarcodeFormat.CODABAR, 
    BarcodeFormat.EAN_13, 
    BarcodeFormat.EAN_8, 
    BarcodeFormat.CODE_39, 
    BarcodeFormat.CODE_93
  ];
  hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);

  const Scan = new BrowserMultiFormatReader();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" } // 전면 카메라
      // video: { facingMode: { exact: "environment" } }, // 후면 카메라
    })
    .then(stream => {
      console.log(stream);
      setLocalStream(stream);
      if (Camera.current) {
        Camera.current.srcObject = stream;
      }
    })
    .catch(error => {
      console.error('Error accessing media devices.', error);
    });

    return () => {
      Stop();
    }
  }, []);

  useEffect(() => {
    if (localStream && Camera.current) {
      Scanning();
    }
    return () => {
      Stop();
    }
  }, [localStream]);

  const Scanning = async () => {
    if (localStream && Camera.current) {
      try {
        Scan.decodeFromVideoDevice(null, Camera.current, (result, err) => {
          if (result) {
            setText(result.getText());
          } else if (err) {
            console.error(err);
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  const Stop = () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
      setLocalStream(null);
    }
    Scan.reset();
  }

  const [text, setText] = useState('');

  return (
    <div>
      <video
        ref={Camera}
        id="video"
        style={{ width: '100%' }}
        autoPlay
      />
      <span>{text}</span>
    </div>
  );
};

export default Reader;
