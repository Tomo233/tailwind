import { useState } from "react";
import "./App.css";

function App() {
const [count, setCount] = useState(0);

return (
<>
  <header className="h-89 pt-8">
    <div className="container mx-auto flex justify-between">
      <div id="leftHeader">
        <img src="/src/assets/logo.png" alt="" />
      </div>
      <div id="rightHeader">
        <a className="underline text-lg	" href="https://templates.gola.io/" target="_blank">templates.gola.io <svg
            className="inline-block w-6 ml-2" width="46" height="46" fill="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M14.752 6.352a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 0 1 0 1.696l-4.8 4.8a1.2 1.2 0 0 1-1.696-1.696l2.751-2.752H3.6a1.2 1.2 0 1 1 0-2.4h13.903l-2.751-2.752a1.2 1.2 0 0 1 0-1.696Z"
              clip-rule="evenodd"></path>
          </svg></a>
      </div>
    </div>
  </header>
  <main>
    <section>
      <img className="w-full h-[1200px]" src="/src/assets/heroSection.png" alt="" />
    </section>
    <section className="bg-[#F8F8F8] p-20">
      <h1 className="text-7xl text-[#242424] mb-10">Welcome</h1>
      <p className="text-3xl text-[#242424]">Thank you for your support. Glad you are here.
        Here’s is some information to help you getting started with this Figma File.</p>
    </section>
    <section>

      <div className="container mx-auto">
        <h1 className="text-4xl pt-20 pb-10">Getting started</h1>
        <div className="bg-[#F8F8F8] pl-28 relative pb-10" id="startedContent">
          <h2 className="text-2xl pt-12 pb-4 "><img className="inline-block  absolute left-8"
              src="src/assets/Vector.png" alt="" /> Assets</h2>
          <p className="mr-36 pb-12 text-lg">This design is using assets from pages like Unsplash, Pexels or other
            assets under a free license. You may
            need to install fonts that aren’t available on Figma. You are free to use all assets mentioned on the
            licensing page for personal & commercial use.

            <span className="block mt-9"> Check out the page below for all used assets.</span></p>
          <a className="underline" href="#">See all assets

            <svg className="inline-block h-5 ml-2" fill="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.352 3.952a1.2 1.2 0 0 1 1.696 0l7.2 7.2a1.2 1.2 0 0 1 0 1.696l-7.2 7.2a1.2 1.2 0 0 1-1.696-1.696l5.151-5.152H3.6a1.2 1.2 0 1 1 0-2.4h13.903l-5.151-5.152a1.2 1.2 0 0 1 0-1.696Z"
                clip-rule="evenodd"></path>
            </svg></a>
        </div>
      </div>
    </section>

    <div className="container mx-auto">
      <h1 className="text-4xl pt-20 pb-10 text-[#242424]">
        Get Webflow Template</h1>
      <div id="webFlowContent" className="bg-[#F8F8F8]">
        <div className="flex justify-between">
          <div id="leftFlow">

            <img className="w-20 inline-block m-12" src="/src/assets/webflow.png" alt="" />
            <div className="inline-block">
              <h1 className="text-2xl">Webflow Template</h1>
              <p className="text-lg">Check out the Webflow Template of this design. </p>
            </div>

          </div>
          <div className="pt-14 pr-12" id="rightFlow">
            <a href="#"><span className="underline">Live Preview</span> <svg className="inline-block h-5 mr-4 ml-1"
                fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M12.352 3.952a1.2 1.2 0 0 1 1.696 0l7.2 7.2a1.2 1.2 0 0 1 0 1.696l-7.2 7.2a1.2 1.2 0 0 1-1.696-1.696l5.151-5.152H3.6a1.2 1.2 0 1 1 0-2.4h13.903l-5.151-5.152a1.2 1.2 0 0 1 0-1.696Z"
                  clip-rule="evenodd"></path>
              </svg> </a>
            <button className="bg-[#4353FF] text-[#fff] px-4 py-4 underline rounded">Get Template <svg
                className="inline-block h-5 ml-2" fill="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M12.352 3.952a1.2 1.2 0 0 1 1.696 0l7.2 7.2a1.2 1.2 0 0 1 0 1.696l-7.2 7.2a1.2 1.2 0 0 1-1.696-1.696l5.151-5.152H3.6a1.2 1.2 0 1 1 0-2.4h13.903l-5.151-5.152a1.2 1.2 0 0 1 0-1.696Z"
                  clip-rule="evenodd"></path>
              </svg> </button>
          </div>
        </div>
      </div>
      <section>
        <h1 className="text-4xl pt-20 pb-10 text-[#242424]">
          Figma File</h1>
        <div className="bg-[#F8F8F8]">
          <div className="flex justify-between">
            <div>

              <img className="w-20 inline-block m-12" src="/src/assets/figma.png" alt="" />
              <div className="inline-block">
                <h1 className="text-2xl">Full Figma File</h1>
                <p className="text-lg">Click the link to get full, 100% editable Figma file.</p>
              </div>

            </div>
            <div className="pt-14 pr-12">
              <button className="bg-[#1E1E1E] text-[#fff] px-4 py-4 underline rounded">Get Full Figma File <svg
                  className="inline-block h-5 ml-2" fill="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M12.352 3.952a1.2 1.2 0 0 1 1.696 0l7.2 7.2a1.2 1.2 0 0 1 0 1.696l-7.2 7.2a1.2 1.2 0 0 1-1.696-1.696l5.151-5.152H3.6a1.2 1.2 0 1 1 0-2.4h13.903l-5.151-5.152a1.2 1.2 0 0 1 0-1.696Z"
                    clip-rule="evenodd"></path>
                </svg> </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section>
      <div className="container mx-auto">
        <h1 className="text-4xl mt-20 mb-10">License</h1>
        <div id="content" className="bg-[#F8F8F8]">
          <img className="pt-12 pl-12" src="/src/assets/Vector.png" alt="" />
          <div className="inline-block">
            <p className="pl-28 pr-12 pb-12 text-lg">You can utilize this design in an unlimited number of projects,
              including commercial and personal projects
              like websites and apps. However, you are not permitted to resell the files, include them in a product or
              template that you are selling, publish them online, or distribute them for free.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="bg-[#F6F6F6] mt-20">

    <div className="container mx-auto">
      <div className="flex justify-between">
        <div id="left">
          <img className="py-8" src="/src/assets/logo.png" alt="" />
        </div>
        <div id="right" className="pt-8">
          <a className="underline" href="#">templates.gola.io <svg className="inline-block h-5 ml-2" fill="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.352 3.952a1.2 1.2 0 0 1 1.696 0l7.2 7.2a1.2 1.2 0 0 1 0 1.696l-7.2 7.2a1.2 1.2 0 0 1-1.696-1.696l5.151-5.152H3.6a1.2 1.2 0 1 1 0-2.4h13.903l-5.151-5.152a1.2 1.2 0 0 1 0-1.696Z"
                clip-rule="evenodd"></path>
            </svg></a>
        </div>
      </div>
    </div>
  </footer>
</>
);
}

export default App;