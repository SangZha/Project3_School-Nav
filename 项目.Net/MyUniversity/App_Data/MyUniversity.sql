CREATE TABLE [dbo].[MapComments] (
    [CommentId]      INT             IDENTITY (1, 1) NOT NULL,
    [CommentContent] NVARCHAR (1000) NOT NULL,
    [CommentTime]    VARCHAR (20)    NOT NULL,
    [MapId]          INT             NOT NULL,
    [UserId]         INT             NOT NULL,
    PRIMARY KEY CLUSTERED ([CommentId] ASC),
    CONSTRAINT [FK_MapComments_Maps] FOREIGN KEY ([MapId]) REFERENCES [dbo].[Maps] ([MapId]),
    CONSTRAINT [FK_MapComments_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([UserId])
);

CREATE TABLE [dbo].[MapComments] (
    [CommentId]      INT             IDENTITY (1, 1) NOT NULL,
    [CommentContent] NVARCHAR (1000) NOT NULL,
    [CommentTime]    VARCHAR (20)    NOT NULL,
    [MapId]          INT             NOT NULL,
    [UserId]         INT             NOT NULL,
    PRIMARY KEY CLUSTERED ([CommentId] ASC),
    CONSTRAINT [FK_MapComments_Maps] FOREIGN KEY ([MapId]) REFERENCES [dbo].[Maps] ([MapId]),
    CONSTRAINT [FK_MapComments_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([UserId])
);

CREATE TABLE [dbo].[Schools] (
    [SchoolId]   INT           IDENTITY (1, 1) NOT NULL,
    [SchoolName] NVARCHAR (30) NOT NULL,
    [SchoolSite] NVARCHAR (10) NOT NULL,
    PRIMARY KEY CLUSTERED ([SchoolId] ASC)
);

CREATE TABLE [dbo].[TopicReplies] (
    [ReplyId]      INT            IDENTITY (1, 1) NOT NULL,
    [ReplyContent] NVARCHAR (MAX) NOT NULL,
    [ReplyTime]    VARCHAR (20)   NOT NULL,
    [TopicId]      INT            NOT NULL,
    [UserId]       INT            NOT NULL,
    [ReplyToId]    INT            NOT NULL,
    PRIMARY KEY CLUSTERED ([ReplyId] ASC),
    CONSTRAINT [FK_TopicReplies_Topics] FOREIGN KEY ([TopicId]) REFERENCES [dbo].[Topics] ([TopicId]),
    CONSTRAINT [FK_TopicReplies_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([UserId])
);

CREATE TABLE [dbo].[Topics] (
    [TopicId]      INT            IDENTITY (1, 1) NOT NULL,
    [TopicTitle]   NVARCHAR (100) NOT NULL,
    [TopicContent] NVARCHAR (MAX) NOT NULL,
    [TopicTime]    VARCHAR (20)   NOT NULL,
    [UserId]       INT            NOT NULL,
    [SchoolId]     INT            NOT NULL,
    PRIMARY KEY CLUSTERED ([TopicId] ASC),
    CONSTRAINT [FK_Topics_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([UserId]),
    CONSTRAINT [FK_Topics_Schools] FOREIGN KEY ([SchoolId]) REFERENCES [dbo].[Schools] ([SchoolId])
);

CREATE TABLE [dbo].[Users] (
    [UserId]       INT            IDENTITY (1, 1) NOT NULL,
    [UserName]     NVARCHAR (20)  NOT NULL,
    [UserAccount]  VARCHAR (20)   NOT NULL,
    [UserPassword] VARCHAR (20)   NOT NULL,
    [UserSign]     NVARCHAR (200) NULL,
    [UserFrom]     NVARCHAR (20)  NULL,
    [UserSchool]   NVARCHAR (40)  NULL,
    [UserGrade]    NVARCHAR (10)  NULL,
    [UserSex]      NVARCHAR (10)  NULL,
    [UserFace]     VARCHAR (100)  NULL,
    PRIMARY KEY CLUSTERED ([UserId] ASC)
);

