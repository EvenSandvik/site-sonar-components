import './App.css';
import SiteList from './components/SiteList';
import SonarButton from './components/SonarButton';
import SonarDropdownList from './components/SonarDropdownList';

function App() {
  return (
    <div  style={{width: "90%", padding: '1rem'}}>
      <h1>Sonar Button</h1>
      <p>Colors</p>
      <SonarButton buttonText="white" size="medium" color="white"></SonarButton>
      <SonarButton buttonText="blue" size="medium" color="blue"></SonarButton>


      <p>Sizes</p>
      <SonarButton buttonText="small" size="small" color="blue"></SonarButton>
      <SonarButton buttonText="medium" size="medium" color="blue"></SonarButton>
      <SonarButton buttonText="large" size="large" color="blue"></SonarButton>


      <h1>Site List</h1>
        <SiteList list={["ALICE::CCIN2P3::HTC", "ALICE::CERN::CERN-AURORA", "ALICE::CERN::CERN-CORONA", "ALICE::CERN::CERN-MIRAGE"]}></SiteList>
      
      
      <h1>Dropdown List</h1>
      <SonarDropdownList options={["rubber duck", "USB stick", "shoe lace", "fishing pole", "cookie jar"]} selectText="Select something"></SonarDropdownList>


      <h1>Filter Component</h1>
      {/* options={["Custom parameter", "HMD", "Loop devices", "Container enables", "Uname", "Singularity", "Underlay", "TMP", "Overlay"]} selectText="Select a filter" */}
    </div>
  );
}

export default App;