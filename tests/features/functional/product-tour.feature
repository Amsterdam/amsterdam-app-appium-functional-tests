Feature: Product Tour

    @skip @BeforeClean @AfterClean
    Scenario Outline: Ik zie een pop-up met uitleg bij verschillende knoppen
        Given ik ben op het <scherm> scherm
        Then <scherm>: ik zie een pop-up bij de knop
        When <scherm>: ik tik op de pop-up
        Then <scherm>: de pop-up verdwijnt
        Examples:
            | scherm               |
            | project detailscherm |
            | home                 |