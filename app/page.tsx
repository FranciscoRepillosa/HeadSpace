// "use client"

import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify  } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator  } from "@aws-amplify/ui-react";
import { getUrl } from 'aws-amplify/storage';
import VidComponent from "./components/vid.component"
import SignOutButtom from "./components/signuot.component"
import { fetchAuthSession } from 'aws-amplify/auth';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { list } from 'aws-amplify/storage';
import { getCurrentUser } from 'aws-amplify/auth';

Amplify.configure(outputs);

const client = generateClient<Schema>();


export default  async function App() {

  const session = await fetchAuthSession();

  const user = await getCurrentUser();
console.log(user);



  const {items} = await list({
    path: `userFiles/`
    // Alternatively, path: ({identityId}) => `album/{identityId}/photos/`
  });

  console.log('nigga wasup ------>',items);
  


  
  // const { signOut } = useAuthenticator();

  // const linkToStorageFile = await getUrl({
  //   path:`userFiles/${identityId}/originalFIles/94d08be34378f5be7365d0347bc9575c.jpg`
    
  //   // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
  // });
//   console.log('signed URL: ', linkToStorageFile.url.href);  
// console.log('conoooooooooooo jose andres que vaina vale  <---------');

  return (
  <div className="px-40 flex flex-1 justify-center py-5">
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Your files {session.identityId}
        </p>
        <SignOutButtom />
      </div>
      <div className="pb-3">
        <div className="flex border-b border-[#d0dbe7] px-4 justify-between">
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-b-[#1980e6] text-[#0e141b] pb-[13px] pt-4 flex-1"
            href="#"
          >
            <p className="text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
              Photos
            </p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4e7397] pb-[13px] pt-4 flex-1"
            href="#"
          >
            <p className="text-[#4e7397] text-sm font-bold leading-normal tracking-[0.015em]">
              Videos
            </p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4e7397] pb-[13px] pt-4 flex-1"
            href="#"
          >
            <p className="text-[#4e7397] text-sm font-bold leading-normal tracking-[0.015em]">
              Documents
            </p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {/* <VidComponent/> */}
        {
        items.map(async item => {
          let src = await getUrl({path: item.path})
          return <img src={src.url.href} alt="oh yeah" />
        })
        }
        {/* <img src={linkToStorageFile.url.href} alt="oh yeah" /> */}
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/854d9feb-4ab5-496f-b2b9-a89e200fed53.png")'
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/44b57660-464b-42d1-baef-c7a809169d9f.png")'
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/4fd2538e-6214-450f-b864-c677761d3736.png")'
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/59a9afee-f270-481d-90fa-f7daa192c982.png")'
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/1075537e-f3ea-418e-bef6-ec69dc303732.png")'
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/dae078cd-3b73-434f-bf5f-87bd886d68cc.png")'
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/5d263556-f1ca-46d7-a589-1187226fad77.png")'
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/ea2f8b69-61a1-4bf5-b4db-6cffa8b26f6c.png")'
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/6fd4096d-5e9e-4b76-9d36-d3fd8c468c19.png")'
            }}
          />
        </div>
      </div>
      <div className="flex px-4 py-3 justify-end">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#e7edf3] text-[#0e141b] gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em]">
          <div
            className="text-[#0e141b]"
            data-icon="Upload"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H80a8,8,0,0,1,0,16H32v64H224V136H176a8,8,0,0,1,0-16h48A16,16,0,0,1,240,136ZM85.66,77.66,120,43.31V128a8,8,0,0,0,16,0V43.31l34.34,34.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,77.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z" />
            </svg>
          </div>
          <span className="truncate">Upload files</span>
        </button>
      </div>
    </div>
  </div>
  );
}