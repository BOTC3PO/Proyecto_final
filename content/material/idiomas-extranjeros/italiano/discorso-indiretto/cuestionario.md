# Idiomas — Italiano — discorso-indiretto (cuestionario)

> Promovido desde el borrador (`../../../_borradores-gemma/idiomas-extranjeros/italiano/discorso-indiretto/cuestionario_crudo.md`)
> con correcciones de contenido. Catorce bloques (más el bloque 17, con un ajuste adicional)
> reportaban en estilo indirecto una frase dirigida a "ti" ("Ti do...", "Ti chiedo...") y daban
> "glielo"/"gliela" (tercera persona) como respuesta correcta, pero ese pronombre no aparecía
> entre las `opciones_explicitas:` generadas (variantes de "me lo"), lo que indica que la
> respuesta prevista era en realidad "me lo" — correcta si quien reporta el discurso es el mismo
> destinatario original ("a te" → "a me"). Se corrigió la respuesta y la explicación en cada
> caso. El bloque 17 además pedía un objeto femenino ("una mano") con opciones que sólo ofrecían
> formas masculinas ("lo"); se cambió el objeto a uno masculino ("un consiglio") coherente con
> las opciones ya dadas. El bloque 21 estaba truncado a mitad de generación (el `enunciado:`
> terminaba en "Alessio disse: 'Offro" sin cierre) y se descartó, dejando 23 preguntas finales
> (el bloque 25, truncado de forma similar en el crudo original, ya era ignorado por el
> validador).

---

### 1 — Discorso indiretto: verbo modale  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-modali", "passato-prossimo"]
pasos:
  - "Identifica la forma corretta del verbo modale nel discorso indiretto."
  - "Verifica che il tempo verbale sia coerente con l'origine della frase."
respuestas_validas:
  - "doveva"
  - "Doveva"
tipo: completar
enunciado: "Maria disse: 'Devo andare a casa.' → Maria disse che ___ andare a casa."
explicacion: "Il verbo modale 'devo' (presente) nel discorso indiretto si trasforma in 'doveva' (imperfetto), poiché il tempo del verbo principale ('andare') rimane invariato."
```




### 2 — Discorso indiretto: pronome oggetto  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["pronomi", "chiusura"]
pasos:
  - "Riconosci il pronome oggetto nel discorso diretto."
  - "Applica la regola della chiusura per il pronome nel discorso indiretto."
opciones_explicitas:
  - "lo"
  - "lui"
  - "me lo"
  - "mielo"
tipo: mc
enunciado: "Luca disse: 'Ti do questo libro.' → Luca disse che ___ dava quel libro."
respuesta: "me lo"
explicacion: "Il pronome diretto 'questo libro' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 3 — Discorso indiretto: tempo verbale  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["tempi-verbali", "presente"]
pasos:
  - "Determina il tempo verbale corretto nel discorso indiretto."
  - "Verifica che il verbo principale e l'ausiliare siano coerenti."
respuestas_validas:
  - "sapeva"
  - "Sapeva"
tipo: completar
enunciado: "Paolo disse: 'Sono stanco.' → Paolo disse che ___ stanco."
explicacion: "Il verbo 'essere' nel discorso indiretto si trasforma in 'sapeva' (imperfetto) per mantenere il significato del presente originale."
```




### 4 — Discorso indiretto: espressione con "dare"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'dare'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Anna disse: 'Ti do questo dolce.' → Anna disse che ___ dava quel dolce."
respuesta: "me lo"
explicacion: "Il pronome diretto 'questo dolce' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'dare', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 5 — Discorso indiretto: verbo irregolare  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-irregolari", "passato-prossimo"]
pasos:
  - "Riconosci il verbo irregolare nel discorso diretto."
  - "Applica la regola del passato prossimo nel discorso indiretto."
respuestas_validas:
  - "aveva fatto"
  - "Aveva fatto"
tipo: completar
enunciado: "Giulia disse: 'Ho finito il lavoro.' → Giulia disse che ___ finito il lavoro."
explicacion: "Il passato prossimo nel discorso indiretto diventa 'aveva fatto', mantenendo l'ausiliare e la partecipa del verbo."
```




### 6 — Discorso indiretto: espressione con "vedere"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'vedere'."
opciones_explicitas:
  - "lo"
  - "lui"
  - "me lo"
  - "mel"
tipo: mc
enunciado: "Marco disse: 'Vedo il film.' → Marco disse che ___ vedeva il film."
respuesta: "lo"
explicacion: "Il complemento oggetto diretto 'il film' si trasforma in 'lo' nel discorso indiretto, mantenendo la relazione con il verbo 'vedere'."
```




### 7 — Discorso indiretto: tempo verbale composto  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["tempi-verbali", "futuro"]
pasos:
  - "Determina il tempo verbale corretto nel discorso indiretto."
  - "Verifica che l'ausiliare e la partecipa siano coerenti."
respuestas_validas:
  - "avrebbe potuto"
  - "Avrebbe potuto"
tipo: completar
enunciado: "Luisa disse: 'Potrò andare.' → Luisa disse che ___ andare."
explicacion: "Il futuro nel discorso indiretto si trasforma in 'avrebbe potuto', mantenendo l'ausiliare e la partecipa del verbo."
```




### 8 — Discorso indiretto: espressione con "credere"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'credere'."
opciones_explicitas:
  - "che"
  - "che lo"
  - "che glielo"
  - "che me lo"
tipo: mc
enunciado: "Giovanni disse: 'Crede che sia giusto.' → Giovanni disse che ___ credesse che fosse giusto."
respuesta: "che"
explicacion: "Il complemento oggetto indiretto 'che' rimane invariato nel discorso indiretto, poiché non è un pronome diretto."
```




### 9 — Discorso indiretto: espressione con "sapere"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'sapere'."
opciones_explicitas:
  - "lo"
  - "lui"
  - "me lo"
  - "mel"
tipo: mc
enunciado: "Maria disse: 'Sapevo la risposta.' → Maria disse che ___ sapeva la risposta."
respuesta: "lo"
explicacion: "Il complemento oggetto diretto 'la risposta' si trasforma in 'lo' nel discorso indiretto, mantenendo la relazione con il verbo 'sapere'."
```




### 10 — Discorso indiretto: espressione con "dire"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'dire'."
opciones_explicitas:
  - "gliel"
  - "glielo"
  - "me lo"
  - "mel"
tipo: mc
enunciado: "Paolo disse: 'Ti dico ciò che so.' → Paolo disse che ___ diceva ciò che sapeva."
respuesta: "me lo"
explicacion: "Il pronome diretto 'ciò che so' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'dire', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 11 — Discorso indiretto: espressione con "prendere"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'prendere'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Giulia disse: 'Ti prendo il caffè.' → Giulia disse che ___ prendeva quel caffè."
respuesta: "me lo"
explicacion: "Il pronome diretto 'il caffè' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'prendere', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 12 — Discorso indiretto: espressione con "chiedere"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'chiedere'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Luca disse: 'Ti chiedo aiuto.' → Luca disse che ___ chiedeva aiuto."
respuesta: "me lo"
explicacion: "Il pronome diretto 'aiuto' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'chiedere', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 13 — Discorso indiretto: espressione con "fare"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'fare'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Anna disse: 'Ti faccio un regalo.' → Anna disse che ___ faceva quel regalo."
respuesta: "me lo"
explicacion: "Il pronome diretto 'un regalo' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'fare', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 14 — Discorso indiretto: espressione con "portare"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'portare'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Marco disse: 'Ti porto il libro.' → Marco disse che ___ portava quel libro."
respuesta: "me lo"
explicacion: "Il pronome diretto 'il libro' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'portare', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 15 — Discorso indiretto: espressione con "dare"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'dare'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Giulia disse: 'Ti do il regalo.' → Giulia disse che ___ dava quel regalo."
respuesta: "me lo"
explicacion: "Il pronome diretto 'il regalo' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'dare', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 16 — Discorso indiretto: espressione con "prendere"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'prendere'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Luisa disse: 'Ti prendo il cappuccino.' → Luisa disse che ___ prendeva quel cappuccino."
respuesta: "me lo"
explicacion: "Il pronome diretto 'il cappuccino' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'prendere', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 17 — Discorso indiretto: espressione con "chiedere"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'chiedere'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Giovanni disse: 'Ti chiedo un consiglio.' → Giovanni disse che ___ chiedeva un consiglio."
respuesta: "me lo"
explicacion: "Il pronome diretto 'un consiglio' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'chiedere', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 18 — Discorso indiretto: espressione con "fare"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'fare'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Paolo disse: 'Ti faccio un favore.' → Paolo disse che ___ faceva quel favore."
respuesta: "me lo"
explicacion: "Il pronome diretto 'un favore' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'fare', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 19 — Discorso indiretto: espressione con "portare"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'portare'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Anna disse: 'Ti porto il dolce.' → Anna disse che ___ portava quel dolce."
respuesta: "me lo"
explicacion: "Il pronome diretto 'il dolce' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'portare', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 20 — Discorso indiretto: espressione con "dare"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'dare'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Luca disse: 'Ti do il regalo.' → Luca disse che ___ dava quel regalo."
respuesta: "me lo"
explicacion: "Il pronome diretto 'il regalo' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'dare', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 22 — Discorso indiretto: espressione con "chiedere"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'chiedere'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Maria disse: 'Ti chiedo aiuto.' → Maria disse che ___ chiedeva aiuto."
respuesta: "me lo"
explicacion: "Il pronome diretto 'aiuto' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'chiedere', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 23 — Discorso indiretto: espressione con "fare"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'fare'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Giulio disse: 'Ti faccio un regalo.' → Giulio disse che ___ faceva quel regalo."
respuesta: "me lo"
explicacion: "Il pronome diretto 'un regalo' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'fare', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 24 — Discorso indiretto: espressione con "portare"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["verbi-regolari", "chiusura"]
pasos:
  - "Identifica il complemento oggetto nel discorso diretto."
  - "Applica la chiusura per i pronomi con 'portare'."
opciones_explicitas:
  - "me lo"
  - "melo"
  - "mi lo"
  - "mel"
tipo: mc
enunciado: "Luisa disse: 'Ti porto il libro.' → Luisa disse che ___ portava quel libro."
respuesta: "me lo"
explicacion: "Il pronome diretto 'il libro' e l'indiretto 'ti' (rivolto a chi riporta il discorso) si uniscono in 'me lo' con la chiusura del verbo 'portare', poiché chi ascolta ora è lo stesso destinatario originale ('a me')."
```




### 25 — Discorso indiretto: espressione con "dare"  
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "discorso-indiretto"
  nivel: "B2"
  tags: ["ver
