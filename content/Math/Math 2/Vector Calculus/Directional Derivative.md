---
title: Directional Derivative
weight: 2
---
# Derivative along normal

### terms

- ϕ=0: surface
- $\hat n$: normal vector at some point P
- dn: small change in position along $\hat n$
- r: general position coord <dx,dy,dz>
- dr: small change in generalized position coord

change in dr and dn in r causes the same change of δϕ in ϕ

### derivation

$$
\begin{align*}
\frac{\partial \phi}{\partial n}=\lim _{\delta n \rightarrow 0} \frac{\delta \phi}{\delta n}\\
\lim _{\delta n \rightarrow 0} \frac{\nabla \phi \cdot \vec{dr}}{\delta n}\\
\lim _{\delta n \rightarrow 0} \frac{|\nabla \phi| \hat n \cdot \vec{dr}}{\delta n}
\end{align*}
$$

$\hat n \cdot \vec{dr}$: amount of dr pointing towards the normal vector = δn

$$
\begin{align*}
\lim _{\delta n \rightarrow 0} \frac{|\nabla \phi| \delta n}{\delta n} &= |\nabla \phi |
\end{align*}
$$

> Conclusion: $\text{grad }\vec \phi$ is a vector $\perp$ to surface and has a magnitude = rate of change of ϕ along normal.

# Directional Derivative

$$
\frac{\partial \phi}{\partial r}=\vec\nabla \phi\cdot \hat r
$$

> ∴ the direction of steepest ascent of a scalar field ϕ is $\vec\nabla \phi$