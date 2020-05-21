import React from "react";
import { Dimmer, Segment, Loader, Image } from "semantic-ui-react";

export const CustomLoader = () => {
  return (
    <div>
      <Segment>
        <Dimmer active inverted>
          <Loader inverted content="Loading"></Loader>
          {/* <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" /> */}
        </Dimmer>
      </Segment>
    </div>
  );
};
