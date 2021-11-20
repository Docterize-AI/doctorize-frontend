import { Header } from './components/header';
import { useRouter } from 'next/router';

export default function Results() {
  const router = useRouter();
  return (
    <div>
        <h1>Results</h1>
        <p>{router.query.result}</p>
    </div>
);
}