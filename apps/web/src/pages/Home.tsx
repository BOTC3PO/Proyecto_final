export default function HomePage(){return( 
<main className="flex-grow">
        <div className="my-12">
            <h2 className="mt-8 mb-3 text-6xl font-bold text-center text-blue-600">Revoluciona el Aprendizaje</h2>
            <h3 className="mb-5 text-center text">Aprende a tu ritmo con módulos interactivos y juegos educativos personalizados.</h3>
        </div>
        
        <div className="flex w-full h-12 mb-8 justify-evenly">
            <button className="px-6 py-2 bg-blue-500 rounded">
                <p className="text-white">Empieza como Estudiante</p>
            </button>
            <button className="px-6 py-2 bg-gray-400 rounded">
                <p>Explora como Profesor</p>
            </button>
        </div>

        <div className="grid grid-cols-2 gap-4 p-8 pl-12 mt-16 text-center bg-gray-100 md:grid-cols-4 min-h-64">
            <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <p className="mb-2 font-semibold">Aprendizaje Personalizado</p>
                <p className="text-sm text-gray-600">Los módulos se adaptan a tu nivel y progreso.</p>
            </div>
            <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <p className="mb-2 font-semibold">Juegos Educativos</p>
                <p className="text-sm text-gray-600">Aprende jugando y diviértete mientras refuerzas tus conocimientos.</p>
            </div>
            <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <p className="mb-2 font-semibold">Herramientas para Profesores</p>
                <p className="text-sm text-gray-600">Crea contenido y monitorea el desempeño de tus alumnos.</p>
            </div>
            <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <p className="mb-2 font-semibold">Acceso Seguro</p>
                <p className="text-sm text-gray-600">Protegemos tus datos y garantizamos privacidad en todo momento.</p>
            </div>
        </div>
    </main>
)}