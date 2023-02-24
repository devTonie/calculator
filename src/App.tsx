import AnimatedWrapper from './components/AnimateWrapper'
import RelativeWrapper from './components/RelativeWrapper';
import {
  CalculatorIcon,
  CurrencyDollarIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: 'Calculator', href: '/calculator', icon: CalculatorIcon },
  { name: 'Currency Converter', href: '/currency-converter', icon: CurrencyDollarIcon },
  { name: 'Units Converter', href: '/unit-converter', icon: Cog8ToothIcon },
];

const App: React.FC = () => {
  return ( <AnimatedWrapper className='absolute w-full'>
        <RelativeWrapper navigation={navigation}>Hello</RelativeWrapper>
  </AnimatedWrapper>
  );
}

export default App;
