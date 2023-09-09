import MainMenu from "../components/MainMenu/MainMenu";
import CardLayout from "../layouts/CardLayout";

const MainScreen = () => {
  return (
    <div className="bg-yankeesBlue h-full">
      <div className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center gap-12">
        <h2 className="text-softWhite">memory</h2>
        <CardLayout>
          <MainMenu />
        </CardLayout>
      </div>
    </div>
  );
};

export default MainScreen;
