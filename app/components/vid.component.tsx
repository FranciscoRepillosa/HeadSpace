"use client"
import { StorageImage } from '@aws-amplify/ui-react-storage';


export default function VidComponent() {

  return (
    <StorageImage
      alt="protected cat"
      path={`userFiles/us-west-2:88dfd772-5220-c1da-83c5-180bdb06deaa/originalFIles/Camila CabelloHQ.png`}
    />
    );
  }
  