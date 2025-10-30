CREATE DATABASE DBTests
GO

PRINT 'Database DBTests criado com sucesso...'

USE DBTests
GO

CREATE TABLE [dbo].[Products] (
    [Id] INT IDENTITY(1,1) PRIMARY KEY,
    [Name] varchar(100) NOT NULL,
    [Upc] varchar(30) NOT NULL
);

PRINT 'Tabela dbo.Products criada com sucesso...'