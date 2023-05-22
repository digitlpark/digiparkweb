---
title: Jacobian
---
$$
\begin{align}
J=\frac{\partial (u,v,w)}{\partial (x,y,z)}\\
J=
\begin{vmatrix}
     \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} & \frac{\partial u}{\partial z}\\ 
     \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} & \frac{\partial v}{\partial z}\\
     \frac{\partial w}{\partial x} & \frac{\partial w}{\partial y} & \frac{\partial w}{\partial z} 
\end{vmatrix}
\end{align}
$$
## Property
JJ'=1 where J'=$\frac{\partial (x,y,z)}{\partial (u,v,w)}$

## Proof
$$
\begin{align}
JJ' = \begin{vmatrix}
     \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} & \frac{\partial u}{\partial z}\\ 
     \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} & \frac{\partial v}{\partial z}\\
     \frac{\partial w}{\partial x} & \frac{\partial w}{\partial y} & \frac{\partial w}{\partial z} 
\end{vmatrix} \begin{vmatrix}
     \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} & \frac{\partial x}{\partial w}\\ 
     \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} & \frac{\partial y}{\partial w}\\
     \frac{\partial z}{\partial u} & \frac{\partial z}{\partial v} & \frac{\partial z}{\partial w} 
\end{vmatrix}=
\begin{vmatrix}
     1 & 0 & 0\\ 
     0 & 1 & 0\\
     0 & 0 & 1 
\end{vmatrix}
=1
\end{align}
$$

# Change of Variables using the Jacobian

<div style="position:relative;padding-bottom:56.25%;">  
 <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;"  
 frameborder="0" width="100%" height="100%"   
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen 
 src="https://www.youtube-nocookie.com/embed/hhFzJvaY__U">  
</iframe>  
</div>

When transforming (x,y)→(new X, new Y)=$(f_x(x,y),f_y(x,y))$, there's a transformation that's doesn't have to be linear overall but linear locally represented by the matrix:

$$
\begin{bmatrix}
     \frac{\partial f_x}{\partial x} & \frac{\partial f_x}{\partial y}\\ 
     \frac{\partial f_y}{\partial x} & \frac{\partial f_y}{\partial y}
\end{bmatrix}
$$

The determinant of the matrix represents how much the area is dilated during the transformation: $J=\frac{\partial (f_x,f_y)}{\partial (x,y)}$

Therefore, (the infinitesimally small area in the initial (x,y)) should only be ($\frac{1}{J}\cdot$ the infinitesimally small area in the final $(f_x,f_y)$)

$$
\begin{align}
dx\cdot dy=\frac{1}{J}\cdot df_x \cdot df_y\\
dx\cdot dy=\frac{\partial (x,y)}{\partial (f_x,f_y)}\cdot df_x\cdot df_y
\end{align}
$$

## Example

Relation between cartesian system's infinitesimal area to polar system's infinitesimal area

$$
\begin{align}
dx\cdot dy=\frac{\partial (x,y)}{\partial (r,\theta)}\cdot dr\cdot d\theta\\
=\begin{vmatrix}
     \cos\theta & -r\sin \theta\\ 
     \sin\theta & r\cos \theta\\
\end{vmatrix} dr\cdot d\theta \\
dx\cdot dy = rdr\cdot d\theta
\end{align}
$$