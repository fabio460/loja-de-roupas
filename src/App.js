

import './App.css';
import Header from './header';
import Home from './home';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import Feminino from './rotas/feminino';
import Masculino from './rotas/masculino';
import PlusSize from './rotas/plus_size';
import Infantil from './rotas/infantil';
import CarrinhoDeCompras from './rotas/carrinhoDeCompras';
import SacolaDeCompras from './rotas/sacolaDeCompras';

function App() {
  return (
    <div className="meuApp">
        
         <BrowserRouter>
             <Link to='/'></Link>
             <Link to ='/feminino'></Link>
             <Link to='/masculino'></Link>
             <Link to='/plussize'></Link>
             <Link to='/infantil'></Link>
             <Link to ='/carrinhoDeCompras'></Link>
             <Link to='/sacoladecompras'></Link>
             <Switch>
               <Route exact path='/'> <Header /> <Home/></Route>
               <Route path='/feminino'><Feminino/></Route>
               <Route path='/masculino'><Masculino/></Route>
               <Route path='/plussize'><PlusSize/></Route>
               <Route path='/infantil'><Infantil/></Route>
               <Route path='/sacoladecompras'><SacolaDeCompras/></Route>
               <Route path='/carrinhoDeCompras'><CarrinhoDeCompras/></Route>
             </Switch>
         </BrowserRouter>
    </div>
  );
}
//
export default App;
