/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/auth-provider';
import Navbar from './nav/Navbar';
import { ProtectedRoute } from './routing/ProtectedRoute';
/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

const Home = () => <div className="p-6">Inicio (público)</div>;
const Explorar = () => <div className="p-6">Explorar (público)</div>;
const Precios = () => <div className="p-6">Precios (público)</div>;
const Login = () => <div className="p-6">Login</div>;
const Register = () => <div className="p-6">Registro</div>;

const Admin = () => <div className="p-6">Admin</div>;
const AdminUsuarios = () => <div className="p-6">Admin  Usuarios</div>;
const AdminCursos = () => <div className="p-6">Admin  Cursos</div>;
const AdminReportes = () => <div className="p-6">Admin  Reportes</div>;

const Clases = () => <div className="p-6">Clases</div>;
const Tareas = () => <div className="p-6">Tareas</div>;
const Progreso = () => <div className="p-6">Progreso</div>;
const Hijos = () => <div className="p-6">Panel Hijo/a (solo Padres)</div>;

const ProfCursos = () => <div className="p-6">Mis Cursos (Profesor)</div>;
const ProfCalif = () => <div className="p-6">Calificaciones (Profesor)</div>;
const ProfAsist = () => <div className="p-6">Asistencia (Profesor)</div>;

const EntDash = () => <div className="p-6">Enterprise Dashboard</div>;
const EntContr = () => <div className="p-6">Enterprise Contratos</div>;
const EntRep = () => <div className="p-6">Enterprise Reportes</div>;

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Público (GUEST) */}
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allow={['ADMIN']}>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/usuarios"
            element={
              <ProtectedRoute allow={['ADMIN']}>
                <AdminUsuarios />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/cursos"
            element={
              <ProtectedRoute allow={['ADMIN']}>
                <AdminCursos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/reportes"
            element={
              <ProtectedRoute allow={['ADMIN']}>
                <AdminReportes />
              </ProtectedRoute>
            }
          />

          {/* Usuario/Alumno + Padres (comparten casi todo) */}
          <Route
            path="/clases"
            element={
              <ProtectedRoute allow={['USER', 'PARENT', 'TEACHER']}>
                <Clases />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tareas"
            element={
              <ProtectedRoute allow={['USER', 'PARENT']}>
                <Tareas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/progreso"
            element={
              <ProtectedRoute allow={['USER', 'PARENT']}>
                <Progreso />
              </ProtectedRoute>
            }
          />
          {/* Extra para Padres */}
          <Route
            path="/hijos"
            element={
              <ProtectedRoute allow={['PARENT']}>
                <Hijos />
              </ProtectedRoute>
            }
          />

          {/* Profesor */}
          <Route
            path="/profesor/cursos"
            element={
              <ProtectedRoute allow={['TEACHER']}>
                <ProfCursos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profesor/calificaciones"
            element={
              <ProtectedRoute allow={['TEACHER']}>
                <ProfCalif />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profesor/asistencia"
            element={
              <ProtectedRoute allow={['TEACHER']}>
                <ProfAsist />
              </ProtectedRoute>
            }
          />

          {/* Enterprise */}
          <Route
            path="/enterprise"
            element={
              <ProtectedRoute allow={['ENTERPRISE']}>
                <EntDash />
              </ProtectedRoute>
            }
          />
          <Route
            path="/enterprise/contratos"
            element={
              <ProtectedRoute allow={['ENTERPRISE']}>
                <EntContr />
              </ProtectedRoute>
            }
          />
          <Route
            path="/enterprise/reportes"
            element={
              <ProtectedRoute allow={['ENTERPRISE']}>
                <EntRep />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

//export default App
