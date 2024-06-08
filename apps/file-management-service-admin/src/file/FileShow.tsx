import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { FILE_TITLE_FIELD } from "./FileTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="filename" source="filename" />
        <TextField label="fileType" source="fileType" />
        <TextField label="fileUrl" source="fileUrl" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadedAt" source="uploadedAt" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Link" target="fileId" label="Links">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="expiryDate" source="expiryDate" />
            <ReferenceField label="File" source="file.id" reference="File">
              <TextField source={FILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="isActive" source="isActive" />
            <TextField label="linkUrl" source="linkUrl" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
