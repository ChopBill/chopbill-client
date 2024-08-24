import { Feather, FontAwesome6 } from "@expo/vector-icons";

export const TabIcons = {
  home: (props: any) => (
    <Feather name="home" size={24} color={"#222"} className="self-center" {...props} />
  ),
  bills: (props: any) => (
    <FontAwesome6 name="money-bill-1" className="self-center" size={24} color={"#222"} {...props} />
  ),
  profile: (props: any) => (
    <Feather name="user" className="self-center" size={24} color={"#222"} {...props} />
  ),
};
