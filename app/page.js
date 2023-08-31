import Image from 'next/image'
/* eslint react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="bg-slate-900 divide-slate-500 text-center mx-auto min-h-screen">
      <Image
        src="/img/cloud.png"
        alt="cloud-png"
        width="150"
        height="48"
      />
      <h1 className="italic text-center hover-x">Kathekon</h1>
      <p><em>Founder of <a href="https://karnovah.com/" rel="noreferrer" target="_blank" className="text-cyan-400">Karnovah</a></em></p>
      <p className="text-[13px]/[17px] text-center italic mb-4">Aspiring Full-Stack <span className="text-yellow-300">Dev</span></p>
      <Image
        src="/img/cloud.png"
        alt="cloud-png"
        width="150"
        height="48"
      />
      <div className="imageWrapper">
        <Image 
          src="/img/mountain.png"
          alt="mountain-png" 
          // width="598" 
          // height="357"
          sizes="(max-width: 768px) 100vw, 700px"
          fill
          priority
        />
      </div>
      <div className="h-[200px] w-[200px] bg-green-200 mx-auto">
      </div>
      <div className="h-[200px] w-[200px] bg-red-200 mx-auto">
        w 
      </div>
    </div>
  );
}
