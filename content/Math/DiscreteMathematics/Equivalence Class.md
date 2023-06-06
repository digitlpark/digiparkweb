https://youtu.be/TbCk79SoCYw

Equivalence class is the name given to a subset of some [[Math/DiscreteMathematics/Relation/Equivalence Relation|equivalence relation]] R which includes all elements that are equivalent to each other.

Let R be an equivalence relation on a set A.  The set of all elements which are related to an element x of set A is called the equivalence class of x.

$[x]=\\{y|(x,y)\in R\\}$ is the equivalence class of x∈A

## Example
A={1,2,3,4,5}
R = {(a,b) | a+b is even}
R is an equivalence relation on set A.
* \[1\]  = \[3\] = \[5\] = {1,3,5}
*  \[2\] = \[4\] = {2,4}

# Properties of Equivalence Class
1. a∈\[a\][^1]
	1. \[a\]={b|(a,b)∈R} and (a,a)∈R[^5]
	2. ∴ aRa ⇒ and a∈\[a\]
2. b∈\[a\] then \[a\]=\[b\][^2]
	1. b∈\[a\]: bRa and aRb[^3]
	2. If x∈\[a\] then xRa. xRa, aRb ⇒ xRb: x∈\[b\] ⇒ \[a\]⊆\[b\]
	3. If x∈\[b\] then xRb. xRb, bRa ⇒ xRa: x∈\[a\] ⇒ \[b\]⊆\[a\]
	4. By 2.,3. \[a\]=\[b\]
3. \[a\]∩\[b\]≠Φ then \[a\]=\[b\][^4]

[^1]: Description: The equivalence class of an element contains itself
[^2]: Description: The equivalence classes of elements in an equivalence class are equal
[^3]: symmetric property of equivalence classes
[^4]: Description: No common elements exist between different equivalence classes. If any common element exists between two equivalence classes it means that they are completely equal
[^5]: reflexive property of equivalence relations