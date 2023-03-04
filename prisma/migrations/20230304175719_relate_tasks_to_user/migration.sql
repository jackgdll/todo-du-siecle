/*
  Warnings:

  - You are about to drop the column `authorEmail` on the `tasks` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "tasks_author_email_index";

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "authorEmail",
ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE INDEX "tasks_userId_idx" ON "tasks"("userId");

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
