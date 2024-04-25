import React from 'react';
import TeslaImg from '../../../assets/imgs/teslaImg.png';
import ExportTeslaItems from '../../../assets/exportTeslaItems';
function BritishDragon() {
  return (
    <div className="flex felx-row justify-center items-center py-[20px]">
      <div className="pr-[50px]">
        <img src={TeslaImg} alt="TeslaImg" />
      </div>
      <div className="max-w-[720px] flex flex-col justify-start">
        <div>
          <p className="text-[#717171] text-l pb-[8px]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-[#4CAF4F]">Tim Smith</h1>
          <p className="text-[#89939E]">
            British Dragon Boat Racing Association
          </p>
        </div>
        <div>
          <ExportTeslaItems />
        </div>
      </div>
    </div>
  );
}

export default BritishDragon;
