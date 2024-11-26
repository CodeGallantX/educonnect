import SignUpForm from './components/SignUpForm';
import Onboarding from './components/Onboarding';

const App = () => {
  return (
    <>
    <div className="hidden sm:block">
      <SignUpForm />
    </div>
    <div className="block sm:hidden">
      <Onboarding />
    </div>
    </>
  );
};

export default App;