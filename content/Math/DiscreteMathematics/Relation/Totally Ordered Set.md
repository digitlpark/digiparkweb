> Also called linearly ordered set

A [[Math/DiscreteMathematics/Relation/Partial Order Relation#Partially Ordered Set (POSET)|POSET]] \[A;R\] is called a totally ordered set if every pair of elements in A are comparable. (An additional [trichotomy law](https://mathworld.wolfram.com/TrichotomyLaw.html) on top of conditions from POSET)
aRb or bRa ∀a,b∈A

### Note
Every Totally Ordered Set is a POSET.

### Example
If S=the set of subsets of {a,b} then \[S;⊆\] is not a TOS
S={Φ,{a},{b},{a,b}}
Let's first see if it's a POSET.
* Reflexive: xRx is true ∀x∈S because all sets are subsets of themselves.
* Antisymmetric: If xRy and yRx that means x=y ∀x,y∈S
	* x⊆y and y⊆x so x must be equal to y
* Transitive: If xRy and yRz then xRz
	* x⊆y and y⊆z then x must be a subset of z: xRz ∀x,y,z∈S
* Therefore, \[S;⊆\] is a POSET
Now let's check if every pair is comparable. xRy or yRx
if x={a}∈S and y={b}∈S
xRy and yRx are both false and are hence not comparable.
Therefore the POSET is not a TOS (totally ordered set).