-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "published_date" TIMESTAMP(3) NOT NULL,
    "total_copies" TEXT NOT NULL,
    "available_copies" INTEGER NOT NULL DEFAULT 1,
    "category" TEXT NOT NULL,
    "ISBN" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_ISBN_key" ON "books"("ISBN");
