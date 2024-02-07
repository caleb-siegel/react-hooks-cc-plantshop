import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, handleSubmit, name, image, price, setName, setImage, setPrice, searchTerm, handleSearchTerm }) {
  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit} name={name} image={image} price={price} setName={setName} setImage={setImage} setPrice={setPrice}/>
      <Search searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
