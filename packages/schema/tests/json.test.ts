import { ConvertSchemaToObject } from '../src';
import { join } from 'path';

test('generate Json object from prisma schema', () => {
  const generate = new ConvertSchemaToObject(join(__dirname, './schemas/schema.prisma')).run();
  expect(generate).toMatchInlineSnapshot(`
    {
      "enums": [
        {
          "fields": [
            "ADMIN",
            "USER",
          ],
          "name": "Role",
        },
      ],
      "models": [
        {
          "documentation": "// User modal documentation",
          "fields": [
            {
              "documentation": "",
              "isId": true,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "id",
              "relationField": false,
              "required": true,
              "type": "Int",
              "unique": false,
            },
            {
              "documentation": "",
              "isId": false,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "createdAt",
              "relationField": false,
              "required": true,
              "type": "DateTime",
              "unique": false,
            },
            {
              "documentation": "",
              "isId": false,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "email",
              "relationField": false,
              "required": true,
              "type": "String",
              "unique": true,
            },
            {
              "documentation": "",
              "isId": false,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "name",
              "relationField": false,
              "required": false,
              "type": "String",
              "unique": false,
            },
            {
              "documentation": "// password documentation
    // password second line documentation",
              "isId": false,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "password",
              "relationField": false,
              "required": true,
              "type": "String",
              "unique": false,
            },
            {
              "documentation": "",
              "isId": false,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "permissions",
              "relationField": false,
              "required": true,
              "type": "Json",
              "unique": false,
            },
            {
              "documentation": "",
              "isId": false,
              "kind": "object",
              "list": true,
              "map": undefined,
              "name": "posts",
              "relation": undefined,
              "required": false,
              "type": "Post",
              "unique": false,
            },
          ],
          "name": "User",
        },
        {
          "documentation": "",
          "fields": [
            {
              "documentation": "",
              "isId": true,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "id",
              "relationField": false,
              "required": true,
              "type": "Int",
              "unique": false,
            },
            {
              "documentation": "",
              "isId": false,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "published",
              "relationField": false,
              "required": true,
              "type": "Boolean",
              "unique": false,
            },
            {
              "documentation": "",
              "isId": false,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "title",
              "relationField": false,
              "required": true,
              "type": "String",
              "unique": false,
            },
            {
              "documentation": "",
              "isId": false,
              "kind": "object",
              "list": false,
              "map": undefined,
              "name": "author",
              "relation": {
                "fields": [
                  "authorId",
                ],
                "references": [
                  "id",
                ],
              },
              "required": false,
              "type": "User",
              "unique": false,
            },
            {
              "documentation": "",
              "isId": false,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "authorId",
              "relationField": true,
              "required": false,
              "type": "Int",
              "unique": false,
            },
            {
              "documentation": "",
              "isId": false,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "createdAt",
              "relationField": false,
              "required": true,
              "type": "DateTime",
              "unique": false,
            },
            {
              "documentation": "",
              "isId": false,
              "kind": "scalar",
              "list": false,
              "map": undefined,
              "name": "updatedAt",
              "relationField": false,
              "required": true,
              "type": "DateTime",
              "unique": false,
            },
          ],
          "name": "Post",
        },
      ],
    }
  `);
});
