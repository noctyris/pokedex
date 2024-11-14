import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { nanoid } from "nanoid";

const DATA = [
  {id: `pkmn-${nanoid()}`, name: "Bulbizarre", num: "1", types: ["Plante","Poison"], category: "Graine"},
  {id: `pkmn-${nanoid()}`, name: "Herbizarre", num: "2", types: ["Plante","Poison"], category: "Graine"},
  {id: `pkmn-${nanoid()}`, name: "Florizarre", num: "3", types: ["Plante","Poison"], category: "Graine"},
  {id: `pkmn-${nanoid()}`, name: "Méga-Florizarre", num: "3", types: ["Plante","Poison"], category: "Graine"},
  {id: `pkmn-${nanoid()}`, name: "Florizarre Gigamax", num: "3", types: ["Plante","Poison"], category: "Graine"},
  {id: `pkmn-${nanoid()}`, name: "Salamèche", num: "4", types: ["Feu"], category: "Lézard"},
  {id: `pkmn-${nanoid()}`, name: "Reptincel", num: "5", types: ["Feu"], category: "Flamme"},
  {id: `pkmn-${nanoid()}`, name: "Dracaufeu", num: "6", types: ["Feu","Vol"], category: "Flamme"},
  {id: `pkmn-${nanoid()}`, name: "Méga-Dracaufeu X", num: "6", types: ["Feu","Dragon"], category: "Flamme"},
  {id: `pkmn-${nanoid()}`, name: "Méga-Dracaufeu Y", num: "6", types: ["Feu","Vol"], category: "Flamme"},
  {id: `pkmn-${nanoid()}`, name: "Dracaufeu Gigamax", num: "6", types: ["Feu","Vol"], category: "Flamme"},
  {id: `pkmn-${nanoid()}`, name: "Carapuce", num: "7", types: ["Eau"], category: "Minitortue"},
  {id: `pkmn-${nanoid()}`, name: "Carabaffe", num: "8", types: ["Eau"], category: "Tortue"},
  {id: `pkmn-${nanoid()}`, name: "Tortank", num: "9", types: ["Eau"], category: "Carapace"},
  {id: `pkmn-${nanoid()}`, name: "Méga-Tortank", num: "9", types: ["Eau"], category: "Carapace"},
  {id: `pkmn-${nanoid()}`, name: "Tortank Gigamax", num: "9", types: ["Eau"], category: "Carapace"},
  {id: `pkmn-${nanoid()}`, name: "Chenipan", num: "10", types: ["Insecte"], category: "Ver"},
  {id: `pkmn-${nanoid()}`, name: "Chrysacier", num: "11", types: ["Insecte"], category: "Cocon"},
  {id: `pkmn-${nanoid()}`, name: "Papilusion", num: "12", types: ["Insecte","Vol"], category: "Papillon"},
  {id: `pkmn-${nanoid()}`, name: "Papilusion Gigamax", num: "12", types: ["Insecte","Vol"], category: "Papillon"},
  {id: `pkmn-${nanoid()}`, name: "Aspicot", num: "13", types: ["Insecte","Poison"], category: "Insectopic"},
  {id: `pkmn-${nanoid()}`, name: "Coconfort", num: "14", types: ["Insecte","Poison"], category: "Cocon" },
  {id: `pkmn-${nanoid()}`, name: "Dardargnan", num: "15", types: ["Insecte","Poison"], category: "Guêpoison"},
  {id: `pkmn-${nanoid()}`, name: "Méga-Dardargnan", num: "15", types: ["Insecte","Poison"], category: "Guêpoison"},
  {id: `pkmn-${nanoid()}`, name: "Roucool", num: "16", types: ["Normal","Vol"], category: "Minoiseau"},
  {id: `pkmn-${nanoid()}`, name: "Roucoups", num: "17", types: ["Normal","Vol"], category: "Oiseau"},
  {id: `pkmn-${nanoid()}`, name: "Roucarnage", num: "18", types: ["Normal","Vol"], category: "Oiseau"},
  {id: `pkmn-${nanoid()}`, name: "Méga-Roucarnage", num: "18", types: ["Normal","Vol"], category: "Oiseau"},
  {id: `pkmn-${nanoid()}`, name: "Rattata", num: "19", types: ["Normal"], category: "Souris"},
  {id: `pkmn-${nanoid()}`, name: "Rattata d'Alola", num: "19", types: ["Ténèbres","Normal"], category: "Souris"},
  {id: `pkmn-${nanoid()}`, name: "Rattatac", num: "20", types: ["Normal"], category: "Souris"},
  {id: `pkmn-${nanoid()}`, name: "Rattatac d'Alola", num: "20", types: ["Ténèbres","Normal"], category: "Souris"},
  {id: `pkmn-${nanoid()}`, name: "Piafabec", num: "21", types: ["Normal","Vol"], category: "Minoiseau"},
  {id: `pkmn-${nanoid()}`, name: "Rapasdepic", num: "22", types: ["Normal","Vol"], category: "Bec-Oiseau"},
  {id: `pkmn-${nanoid()}`, name: "Abo", num: "23", types: ["Poison"], category: "Serpent"},
  {id: `pkmn-${nanoid()}`, name: "Arbok", num: "24", types: ["Poison"], Ccategory: "Cobra"},
  {id: `pkmn-${nanoid()}`, name: "Pikachu", num: "25", types: ["Électrik"], category: "Souris"},
  {id: `pkmn-${nanoid()}`, name: "Pikachu Gigamax", num: "25", types: ["Électrik"], category: "Souris"},
  {id: `pkmn-${nanoid()}`, name: "Raichu", num: "26", types: ["Électrik"], category: "Souris"},
  {id: `pkmn-${nanoid()}`, name: "Raichu d'Alola", num: "26", types: ["Électrik","Psy"], category: "Souris"},
  {id: `pkmn-${nanoid()}`, name: "Sabelette", num: "27", types: ["Sol"], category: "Souris"},
  {id: `pkmn-${nanoid()}`, name: "Sabelette d'Alola", num: "27", types: ["Glace","Acier"], category: "Souris"},
  {id: `pkmn-${nanoid()}`, name: "Sablaireau", num: "28", types: ["Sol"], Scategory: "ouris"},
  {id: `pkmn-${nanoid()}`, name: "Sablaireau", num: "28", types: ["Glace","Acier"], category: "Souris"},
  {id: `pkmn-${nanoid()}`, name: "Nidoran ♀", num: "29", types: ["Poison"], category: "Vénépic"},
  {id: `pkmn-${nanoid()}`, name: "Nidorina", num: "30", types: ["Poison"], category: "Vénépic"},
  {id: `pkmn-${nanoid()}`, name: "Nidoqueen", num: "31", types: ["Poison","Sol"], category: "Perceur"},
  {id: `pkmn-${nanoid()}`, name: "Nidoran ♂", num: "32", types: ["Poison"], category: "Vénépic"},
  {id: `pkmn-${nanoid()}`, name: "Nidorino", num: "33", types: ["Poison"], category: "Vénépic"},
  {id: `pkmn-${nanoid()}`, name: "Nidoking", num: "34", types: ["Poison","Sol"], category: "Vénépic"},
  {id: `pkmn-${nanoid()}`, name: "Mélofée", num: "35", types: ["Fée"], category: "Fée"},
  {id: `pkmn-${nanoid()}`, name: "Mélodelfe", num: "36", types: ["Fée"], category: "Fée"},
  {id: `pkmn-${nanoid()}`, name: "Goupix", num: "37", types: ["Feu"], category: "Renard"},
  {id: `pkmn-${nanoid()}`, name: "Goupix d'Alola", num: "37", types: ["Glace"], Rcategory: "enard"},
  {id: `pkmn-${nanoid()}`, name: "Feunard", num: "38", types: ["Feu"], category: "Renard"},
  {id: `pkmn-${nanoid()}`, name: "Feunard d'Alola", num: "38", types: ["Glace"], category: "Renard"},
  {id: `pkmn-${nanoid()}`, name: "Rondoudou", num: "39", types: ["Normal","Fée"], category: "Bouboule"},
  {id: `pkmn-${nanoid()}`, name: "Grodoudou", num: "40", types: ["Normal","Fée"], category: "Bouboule"},
  {id: `pkmn-${nanoid()}`, name: "Nosferapti", num: "41", types: ["Poison","Vol"], category: "Chovsouris"},
  {id: `pkmn-${nanoid()}`, name: "Nosferalto", num: "42", types: ["Poison","Vol"], category: "Chovsouris"},
  {id: `pkmn-${nanoid()}`, name: "Brutalibré", num: "701", types: ["Combat","Vol"], category: "Catcheur"},
  {id: `pkmn-${nanoid()}`, name: "Brutalibré", num: "701", types: ["Combat", "Vol"], category: "Catcheur", location: "brutalibre.png"},

]

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App pokemons={DATA} />
  </StrictMode>
);
