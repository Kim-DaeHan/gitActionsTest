import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TestModule } from "./test/test.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    TestModule,
    UserModule,
  ],
})
export class AppModule {}
