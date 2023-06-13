---
title: Stationary Points in Multivariable Functions
---
https://youtu.be/UID893EosM8
# # Local Extrema, Critical Points, & Saddle Points of Multivariable Functions
Multivariable function: z=f(x,y)

{{< mermaid >}}
graph TD

    A[Start] -->|fₓ=0 & f_y=0| B("Stationary points (x₀,y₀)")

    B --> C[D=rt-s^2=f_xxf_yy-f_xy^2]

    C -->D[D>0]

    C -->E[D<0]

    E -->F[Saddle Point]

    D -->G["f_xx>0"]

    D -->H["f_xx<0"]

    G ---|like upward parabola| I["Local Min"]

    H ---|like downward parabola| J["Local Max"]
{{< /mermaid >}}
