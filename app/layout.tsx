"use client"

import React from "react";
import { Amplify } from "aws-amplify";
// import "./app.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
          <link
            rel="stylesheet"
            as="style"
            href="https://fonts.googleapis.com/css2?display=swap&amp;family=Inter%3Awght%40400%3B500%3B700%3B900&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
          />

          <title>Galileo Design</title>
          <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

          <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        </head>
        <body>
          <div
            className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
          >
            <div className="layout-container flex h-full grow flex-col">
              <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
                <div className="flex items-center gap-4 text-[#0e141b]">
                  <div className="size-4">
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">
                    Cloudy
                  </h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                  <div className="flex gap-2">
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e7edf3] text-[#0e141b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                      <div
                        className="text-[#0e141b]"
                        data-icon="MagnifyingGlass"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                        </svg>
                      </div>
                    </button>
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e7edf3] text-[#0e141b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                      <div
                        className="text-[#0e141b]"
                        data-icon="Bell"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
                        </svg>
                      </div>
                    </button>
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e7edf3] text-[#0e141b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                      <div
                        className="text-[#0e141b]"
                        data-icon="Table"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM216,64V96H40V64ZM40,160H80v32H40Zm176,32H96V160H216v32Z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage:
                      'url("data:image/jpeg;base64,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")'
                  }}
                  />
                </div>
              </header>
              <Authenticator>
                {({ signOut, user }) => (
                  <div>
                    {children}
                  </div>
                 )}
              </Authenticator>
            </div>
          </div>     
        </body>
    </html>
  );
}