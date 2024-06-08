/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LinkWhereUniqueInput } from "../../link/base/LinkWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LinkUpdateManyWithoutFilesInput {
  @Field(() => [LinkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LinkWhereUniqueInput],
  })
  connect?: Array<LinkWhereUniqueInput>;

  @Field(() => [LinkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LinkWhereUniqueInput],
  })
  disconnect?: Array<LinkWhereUniqueInput>;

  @Field(() => [LinkWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LinkWhereUniqueInput],
  })
  set?: Array<LinkWhereUniqueInput>;
}

export { LinkUpdateManyWithoutFilesInput as LinkUpdateManyWithoutFilesInput };
