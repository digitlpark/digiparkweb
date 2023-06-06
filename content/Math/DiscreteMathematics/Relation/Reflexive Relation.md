A [[Math/DiscreteMathematics/Relation/Relation#Relation|relation]] 'R' on a set 'A' is said to be reflexive if (x,x)∈R ∀x∈A

### Example

A={1,2,3}
R must have (1,1),(2,2),(3,3) in order to be reflexive.

---
R={(x,y) ; x-y is an integer}
Let's check if R is a reflexive relation on the set of natural numbers.
xRx is true ∀x∈N because x-x=0 is an integer.
Therefore 'R' is reflexive on the set of N. 

## How many reflexive relations possible?
If |A|=n
Number of reflexive relations: 2^(n²-n)

### Example
A={1,2}
|A|=2
A×A=
| | | 
| ----------- | ----------- | 
| (1,1) | (1,2) | 
| (2,1) | (2,2) |

List of all reflexive relations on A:
1. {(1,1),(2,2)}
2. {(1,1),(2,2),(1,2)}
3. {(1,1),(2,2),(2,1)}
4. {(1,1),(2,2),(1,2),(2,1)}

2^(2²-2)  = 4 possible relations
