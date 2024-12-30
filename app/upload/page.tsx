"use client";

import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { useAuthenticator  } from "@aws-amplify/ui-react";
import { getCurrentUser } from 'aws-amplify/auth';


export default async function Page() {

  const user = await getCurrentUser();
// console.log('from ipload', user);

    return (  
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="flex flex-wrap justify-between gap-3 p-4">
            <div class="flex min-w-72 flex-col gap-3">
              <p class="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight">Upload to Cloud Storage</p>
              <p class="text-[#4e7397] text-sm font-normal leading-normal">File upload will begin immediately</p>
            </div>
          </div>
          <div class="p-4 @container">
            <div class="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#d0dbe7] bg-slate-50 p-5 @[480px]:flex-row @[480px]:items-center">
              <div class="flex flex-col gap-1">
                <p class="text-[#0e141b] text-base font-bold leading-tight">Drag &amp; drop files</p>
                <p class="text-[#4e7397] text-base font-normal leading-normal">Add files from your computer</p>
              </div>
              <a class="text-sm font-bold leading-normal tracking-[0.015em] flex gap-2 text-[#0e141b]" href="#">
                Add files
                <div class="text-[#0e141b]" data-icon="ArrowRight" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <h3 class="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Or upload from a URL</h3>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <input
                placeholder="https://example.com/image.jpg"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7397] p-[15px] text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex px-4 py-3 justify-end">
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Start Upload</span>
            </button>
          </div>
        </div>
        <FileUploader
          path={({ identityId }) => `userFiles/${identityId}/originalFIles/`}
          maxFileCount={10}
          isResumable
          autoUpload={false}
          onUploadError={(error, { key }) => {
            alert(error);
          }}
        />
      </div>
  );
};