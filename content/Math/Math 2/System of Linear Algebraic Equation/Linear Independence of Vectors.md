---
title: Linear Independence of Vectors
weight: 5
---
# When they are dependent or independent

Similar to [[Linear Dependence of Functions|functions]],
If a set of vectors are dependent, then the equation: $c_1v_1+c_2v_2+...+c_nv_n$ can have a nonzero solution $c_i\ne0$. If they're independent, then the only solution is for all of them $c_i$ to be 0.

## Theorem

> [!Theorem]
> The set of vectors $\vec{v_{1}},\vec{v_{2}},...\vec{v_{n}}$ is linearly dependent **iff** atleast one element of the set is a linear combination of remaining other vectors.

### If they're dependent then 

$$
\begin{align*}
c_1v_1+c_2v_2+...+c_nv_n=0\\
\exists i \text{ such that }c_i\ne0\\
v_{i}=\frac{1}{c_{i}}(-c_1v_1-c_2v_2...-c_nv_{n)}
\end{align*}
$$
∴ $v_i$ is expressed as a linear combination of other vectors.

### If one of them can be expressed as a linear combination then 

$$
\begin{align*}
v_{i}=c_1v_1+c_2v_2+...+c_nv_n\\
c_1v_1+c_2v_2+...-v_i+...c_nv_n=0\\
c_{i}: \text{coefficient of }v_{i}=-1\\
c_{i}\ne 0
\end{align*}
$$
∴ the set of vectors are dependent.

# Check and find dependence if possible

We can convert the equation 
$$
c_1\vec{v_1}+c_2\vec{v_2}+...+c_n\vec{v_n}=0
$$

into a homogeneous system of linear equations

Let $v_k=<a_{1k},a_{2k},a_{3k},...,a_{dk}>$ (d-dimensional vectors)

> [!Homogeneous System]
> $$
\begin{align*}
a_{11}c_{1}+a_{12}c_2+...a_{1n}c_n=0\\
a_{21}c_{1}+a_{22}c_{2}+...a_{2n}c_n=0\\
.\\
.\\
.\\
a_{d1}c_{1}+a_{d2}c_{2}+...a_{dn}c_{n}=0
\end{align*}
>$$
>(A|0) is the augmented matrix
> Each of the columns take up each of the 'n' vectors.

We can utitilize [[Math/Math 2/System of Linear Algebraic Equation/Rank and solution of linear equations#For a Homogeneous System]]:
* If rank of matrix=number of vectors => only 1 solution which is all $c_i=0$ => system of vectors are independent
* If rank of matrix< number of vectors => infinite solutions => system of vectors are dependent
	* We can solve the augmented matrix to find the dependency by solving for $c_i$s.