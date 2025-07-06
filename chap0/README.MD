# 🧠 Strategy Pattern (Behavioral Design Pattern)

The **Strategy Pattern** defines a family of algorithms, encapsulates each one, and makes them interchangeable. It allows the algorithm to vary **independently from clients that use it**.

---

## 🧩 Purpose

The Strategy Pattern is useful when:
- You want to define a set of related algorithms or behaviors.
- You want to switch between different algorithms at runtime.
- You want to eliminate conditional logic (like `if-else` or `switch` statements) for algorithm selection.
- You want to adhere to the **Open/Closed Principle** — open for extension, closed for modification.

---

## 🔧 Key Components

| Component        | Role                                                                 |
|------------------|----------------------------------------------------------------------|
| **Strategy**     | Interface or abstract class defining the algorithm contract          |
| **ConcreteStrategy** | Actual implementations of the algorithm                          |
| **Context**      | Maintains a reference to a Strategy and delegates behavior to it     |

---

## 🗂 Example Use Cases

- Different sorting algorithms (`QuickSort`, `MergeSort`, `BubbleSort`) in a library.
- Payment processing (`CreditCard`, `PayPal`, `Crypto`) where each follows a different strategy.
- Compression utilities (`ZIP`, `RAR`, `GZIP`) selected at runtime.

---

## ✅ Benefits

- Promotes **flexibility** and **extensibility**.
- Eliminates large conditional blocks.
- Encourages clean separation of concerns.

---

## 🚫 Drawbacks

- May increase the number of classes/objects.
- Strategy objects may expose internal details of algorithms if not designed carefully.


