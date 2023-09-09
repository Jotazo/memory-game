import Button from "./Button";

const ButtonSecondary = ({ text }: { text: string }) => {
  const secondaryStyles =
    "bg-[#DFE7EC] hover:bg-silverLakeBlue text-charcoal hover:text-softWhite";
  return <Button text={text} classStyles={secondaryStyles} />;
};

export default ButtonSecondary;
