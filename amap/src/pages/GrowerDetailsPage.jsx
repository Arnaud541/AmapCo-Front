import React from 'react'

function GrowerDetailsPage() {
    const [grower, setGrower] = useState([]);
  
    useEffect(() => {
      axios
        //.get("http://127.0.0.1/AmapCo-Back/index.php?action=grower?id")
        .then((response) => {
          setGrower(response.data.producteurs);
        });
    }, []);
  
    return (
      <>
        <Navbar />
        <Grower grower={grower} />
      </>
    );
  }

export default GrowerDetailsPage