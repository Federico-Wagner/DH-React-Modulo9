

import SideBar from './components/SideBar';
import ContentWraper from './components/ContentWraper'

import './assets/css/app.css'

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Dashboard DH-Movies - Admin</title>

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"></link>

        <link href="assets/css/app.css" rel="stylesheet"></link>
      </head>
      <body>
        <div id="wrapper">
          <SideBar></SideBar>
          <ContentWraper></ContentWraper>
        </div>
      </body>
    </div>
  );
}

export default App;
