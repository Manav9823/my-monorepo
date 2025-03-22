export default function Home({ serverData }) {
  return (
    <div>
      <h1>Next.js SSR Example</h1>
      <p>This page was rendered on the server.</p>
      <p>Server timestamp: {serverData.timestamp}</p>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Simulate fetching data from an API
  const serverData = {
    timestamp: new Date().toISOString(),
  };

  // Pass data to the page via props
  return { props: { serverData } };
}