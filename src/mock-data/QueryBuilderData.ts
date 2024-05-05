export interface tableColumn
{
    "column_name": string,
    "column_default": null,
    "data_type": string,
    "is_nullable": string,
    "character_maximum_length": number,
    "numeric_precision": null
}

export const tableData={
    columns:[
        {
            "column_name": "Address",
            "column_default": null,
            "data_type": "varchar",
            "is_nullable": "YES",
            "character_maximum_length": 60,
            "numeric_precision": null
          },
          {
            "column_name": "City",
            "column_default": null,
            "data_type": "varchar",
            "is_nullable": "YES",
            "character_maximum_length": 15,
            "numeric_precision": null
          },
          {
            "column_name": "CompanyName",
            "column_default": null,
            "data_type": "varchar",
            "is_nullable": "NO",
            "character_maximum_length": 40,
            "numeric_precision": null
          },
          {
            "column_name": "ContactName",
            "column_default": null,
            "data_type": "varchar",
            "is_nullable": "YES",
            "character_maximum_length": 30,
            "numeric_precision": null
          },
          {
            "column_name": "ContactTitle",
            "column_default": null,
            "data_type": "varchar",
            "is_nullable": "YES",
            "character_maximum_length": 30,
            "numeric_precision": null
          },
          {
            "column_name": "Country",
            "column_default": null,
            "data_type": "varchar",
            "is_nullable": "YES",
            "character_maximum_length": 15,
            "numeric_precision": null
          },
          {
            "column_name": "CustomerID",
            "column_default": null,
            "data_type": "varchar",
            "is_nullable": "NO",
            "character_maximum_length": 5,
            "numeric_precision": null,
            "primaryKey": true
          },
          {
            "column_name": "Fax",
            "column_default": null,
            "data_type": "varchar",
            "is_nullable": "YES",
            "character_maximum_length": 24,
            "numeric_precision": null
          },
          {
            "column_name": "Phone",
            "column_default": null,
            "data_type": "varchar",
            "is_nullable": "YES",
            "character_maximum_length": 24,
            "numeric_precision": null
          },
          {
            "column_name": "PostalCode",
            "column_default": null,
            "data_type": "varchar",
            "is_nullable": "YES",
            "character_maximum_length": 10,
            "numeric_precision": null
          },
          {
            "column_name": "Region",
            "column_default": null,
            "data_type": "varchar",
            "is_nullable": "YES",
            "character_maximum_length": 15,
            "numeric_precision": null
          }
    ]
}

export const filterOperations={
    "varchar":[
        "NULL",
        "NOT NULL",
        "PRESENT",
        'LIKE',
        'NOT LIKE',
        'IS NOT',
        'STARTS WITH',
        'ENDS WITH',
        'CONTAINS'
    ]
} as any