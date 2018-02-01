﻿// <auto-generated />
using Giftblitz.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Giftblitz.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Giftblitz.Models.Group", b =>
                {
                    b.Property<string>("GroupID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Deadline");

                    b.Property<string>("Message");

                    b.Property<string>("Name");

                    b.HasKey("GroupID");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("Giftblitz.Models.Member", b =>
                {
                    b.Property<string>("MemberID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Assignee");

                    b.Property<string>("Assignment");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("Group");

                    b.Property<string>("LastName");

                    b.HasKey("MemberID");

                    b.ToTable("Members");
                });
#pragma warning restore 612, 618
        }
    }
}
