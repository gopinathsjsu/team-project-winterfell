import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
import moment from "moment";

const { Meta } = Card;

const ConnectNav = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;

  return (
  
    // <div style={{backgroundImage:'url(https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-road-pavement-dream-success-road-image_262191.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    <div className="d-flex justify-content-around">
      <Card>
        <Meta
           // avatar={<Avatar>{auth.result.userName}</Avatar>}
           title={`Hello ${auth.result.userName}`}
           description={` Welcome!`}
        />
      </Card>
      </div>
      // </div>
  );
};

export default ConnectNav;
