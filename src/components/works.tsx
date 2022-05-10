import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground } from "./work";

const Works = () => {
  return (
    <TileWrapper numofPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          rederContent={({ progress }) => {
            return <span className="text-9xl">Foo {progress}</span>;
          }}
        />
        <Tile
          page={1}
          rederContent={({ progress }) => {
            return <span className="text-9xl">Bar {progress}</span>;
          }}
        />
        <Tile
          page={2}
          rederContent={({ progress }) => {
            return <span className="text-9xl">Foo {progress}</span>;
          }}
        />
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
