// export interface productTapbeInterface {
//   id: string;
//   client: string;
//   address: {
//     id: string;
//     title: string;
//     y: string;
//     x: string;
//   };
//   delivery_time: string;
//   weight_type: string;
//   order_items: [
//     {
//       id: string;
//       code: string;
//       type: string;
//     }
//   ];
//   status: string;
// }

export interface orderTypes {
  address: {
    id: number;
    title: string;
    y: string;
    x: string;
  };
  order_items: [
    {
      id: number;
      code: string;
      type: string;
    }
  ];
  client: {
    id: number;
    address: {
      id: number;
      title: string;
      y: string;
      x: string;
    };
    full_name: string;
    phone_number: string;
    home_number: string;
    email: string;
    pharmacy: number;
  };
  order_type: string;
  weight_type: string;
  copay: number;
  proof_type: string;
  comment: string;
  request_call_on_arrival: boolean;
  deliver_time: string;
  verification_code: string;
  start_time_interval: string;
  end_time_interval: string;
  pharmacy: number;
  creator: number;
  driver: number;
  dispatcher: number;
  id: number;
}
