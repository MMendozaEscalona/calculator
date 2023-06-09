import Head from "next/head";
import { CalculatorBox } from "@/components/calculatorBox/CalculatorBox";
import { CalculatorProvider } from "@/context/calculator/CalculatorProvider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CalculatorProvider>
          <CalculatorBox />
        </CalculatorProvider>
      </main>
    </>
  );
}
