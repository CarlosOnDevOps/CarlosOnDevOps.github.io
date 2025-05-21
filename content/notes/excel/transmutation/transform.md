---
title: "Excel SSN Formatting Guide"
weight: 10
menu:
  notes:
    name: "SSN Formatting"
    identifier: "notes-excel-ssn-formatting"
    parent: "notes-excel"
    weight: 10
---

{{< note title="📊 SSN Formatting Cheatsheet" >}}

## **Standard SSN Transformation**

**Input** → **Formula** → **Output**

`123456789` → `=TEXT(A2,"000-00-0000")` → `123-45-6789`  
`123456789` → `=",'" & TEXT(A3,"000-00-0000") & "'"` → `,'123-45-6789'`

## Sample Code

```excel
=TEXT(A2,"000-00-0000")

=",'" & TEXT(A3,"000-00-0000") & "'"

{{< /note >}}