import Button from "./Button";

const ButtonPrimary = ({ text }: { text: string }) => {
  const primaryStyles = "bg-orange hover:bg-[#FFB84A] text-softWhite";
  return <Button text={text} classStyles={primaryStyles} />;
};

export default ButtonPrimary;
