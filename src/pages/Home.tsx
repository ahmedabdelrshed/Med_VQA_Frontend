import NavBar from "../components/common/NavBar/NavBar";

const Home = () => {
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const token = Cookies.get("token");
  // const onLogout = () => {
  //   dispatch(actLogout());
  //   navigate("/login");
  // };
  return (
    <div className="min-h-screen">
      <NavBar />
    </div>
  );
};

export default Home;
