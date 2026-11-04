package ar.virtualbook.offline

import android.os.Bundle
import android.view.View
import androidx.activity.enableEdgeToEdge
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : TauriActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    enableEdgeToEdge()
    super.onCreate(savedInstanceState)
    // La web no reserva lugar para la barra de estado ni la de navegación: se lo deja la vista que la contiene.
    val raiz = findViewById<View>(android.R.id.content)
    ViewCompat.setOnApplyWindowInsetsListener(raiz) { vista, insets ->
      val barras = insets.getInsets(WindowInsetsCompat.Type.systemBars() or WindowInsetsCompat.Type.displayCutout())
      val teclado = insets.getInsets(WindowInsetsCompat.Type.ime())
      vista.setPadding(barras.left, barras.top, barras.right, maxOf(barras.bottom, teclado.bottom))
      WindowInsetsCompat.CONSUMED
    }
  }
}
